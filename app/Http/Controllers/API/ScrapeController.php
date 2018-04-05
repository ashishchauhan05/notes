<?php namespace App\Http\Controllers\API;

use App\Http\Controllers\GSController;
use Illuminate\Database\Eloquent;
use Illuminate\Support\Facades\DB;
use View;
use Validator;
use Input;
use Illuminate\Http\Request;
use Mail;
use App\Helpers\GeneralHelper;

class ScrapeController extends GSController {

	public function __construct()
	{
		parent::__construct();
	}

    public function fetchLinks(Request $request) {

        $url = $request->url;

        $html = GeneralHelper::get_data($url);
		$dom = new \DOMDocument;

		@$dom->loadHTML($html);

		$links = $dom->getElementsByTagName('a');
		$dataSet = array();
		foreach ($links as $link){
		    //Extract and show the "href" attribute.

		    $dataSet[] = array(
		    	'name' => $link->nodeValue,
		    	'link' => $link->getAttribute('href')
		    );
		}

		return response()->json($dataSet);
    }

}
