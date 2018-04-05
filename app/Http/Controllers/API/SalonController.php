<?php namespace App\Http\Controllers\API;

use App\Http\Controllers\GSController;
use Illuminate\Database\Eloquent;
use Illuminate\Support\Facades\DB;
use View;
use App\Salon;
use App\SalonInvoicesAG;
use App\ServiceCategory;
use Input;
use Illuminate\Http\Request;
use Session;
use Mail;

class SalonController extends GSController {

	public function __construct()
	{
		parent::__construct();
	}

    public function getList() {
        $salons = Salon::all();
        return response()->json($salons);
    }

	public function getInvoice(Request $request,$salon_id,$month) {
		 	$invoice = DB::table('salon_invoices_ag')
				->join('invoices','salon_invoices_ag.invoice_id','=','invoices.id')
				->where("salon_invoices_ag.salon_id",$salon_id)
				->where("salon_invoices_ag.month",$month)
				->whereIn("invoices.status",["FROZEN","PAID"])
				->select('invoices.*')
				->first();
    // $invoice = SalonInvoicesAG::where("salon_id",$salon_id)
			// 													->where("month",$month)
			// 													->where("status","FREEZED")
			// 													->first();
        return response()->json($invoice);
    }

	public function getCustomInvoice(Request $request,$invoice_no) {
			$invoice = DB::table('invoices')
				->where("invoice_no",str_replace("_","/",$invoice_no))
				->whereIn("status",["FROZEN","PAID"])
				->select('invoices.*')
				->first();
		return response()->json($invoice);
	}

    public function getListByBoundary(Request $request) {
        $rect = $request->rect;
        $bounds = explode("),", $rect);
        $southwest = $bounds[0];
        $southwest = str_replace('(','',$southwest);
        $southwest = str_replace(')','',$southwest);
        $southwest_arr = explode(',',$southwest);
        $a = $southwest_arr[0];
        $b = $southwest_arr[1];
        $northeast = $bounds[1];
        $northeast = str_replace(')','',$northeast);
        $northeast = str_replace('(','',$northeast);
        $northeast_arr = explode(',',$northeast);
        $c = $northeast_arr[0];
        $d = $northeast_arr[1];

        $salons = Salon::with("city","location")
                        ->where('lat', '>', $a)
                        ->where('lat', '<', $c)
                        ->where('lng', '>', $b)
                        ->where('lng', '<', $d)
                        ->get();
        return response()->json($salons);
    }

    public function getListByCity($city_id) {
        $salons = Salon::where('city_id',$city_id)->get();
        return response()->json($salons);
    }

    public function getSalonInfo($display_id, Request $request) {
        $salons = Salon::with("city","location")
                        ->where('display_id', $display_id)
                        ->first();
        return response()->json($salons);
    }

    public function getSalonServices($display_id, Request $request) {
        $salon = Salon::where('display_id', $display_id)->first();
        $arr = array();
        $cat = ServiceCategory::orderBy('parent_id', 'asc')->orderBy('id', 'asc')->get();

        $services = DB::select("SELECT s.id, s.subcategory_id, s.category_id, s.service_type, s.name, sr.rates
                                FROM `service_rates` sr
                                left join services s on s.id = sr.service_id
                                where sr.city_id = '".$salon->city_id."'
                                and s.id not in (select service_id from salon_services where salon_id='".$salon->id."')
                                ");
        foreach ($services as $s) {
            $service = array();
            $service["id"] = $s->id;
            $service["name"] = $s->name;
            $service["service_type"] = $s->service_type;
            $service["cost"] = $s->rates;

            $subcategories[$s->subcategory_id][] = $service;
        }

        foreach ($cat as $c) {
            if ($c->parent_id>0) {
                if (isset($subcategories[$c->id])) {
                    $subcat[$c->id] = array();
                    $subcat[$c->id]["id"] = $c->id;
                    $subcat[$c->id]["name"] = $c->name;
                    $subcat[$c->id]["services"] = $subcategories[$c->id];

                    $arr[$c->parent_id]["subcategories"][] = $subcat[$c->id];
                }
            } else {
                $arr[$c->id]["id"] = $c->id;
                $arr[$c->id]["name"] = $c->name;
            }
        }


        $json["result"] = "OK";
        $json["DATA"] = array_values($arr);



        return response()->json($json);
    }

    
    public function getSalonByFilters(Request $request) {

        $city_id = $request->city_id;
        $gender = $request->gender;
        $category = $request->category;
        $salon_type = '';
        if($gender == 'f') {
            $salon_type = 'Ladies';
        }
        if($gender == 'm') {
            $salon_type = 'Gents';
        }
        $salon_array = array(array('id' => '', 'name' => '--Select Salon--'));
        $salons =  DB::table('salons')
                    ->where('active','=','1')
                    ->where('city_id', $city_id)
                    ->where(function($query) use($salon_type){
                        if($salon_type)
                            $query->where('type','=' ,'Unisex')
                                ->orWhere('type', '=', $salon_type);
                    });

        if($category) {
            $salons = $salons->where('category','=',$category);
        }

        $salons = $salons->get();

        foreach($salons as $l) {
            $arr['id'] = $l->id;
            $arr['name'] = $l->name;
            array_push($salon_array,$arr);
        }
        return response()->json($salon_array);
    }

}
