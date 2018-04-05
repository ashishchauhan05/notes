<?php namespace App\Http\Controllers;

use View;

class BlogController extends GSController {
    /**
	* Create a new controller instance.
	*
	* @return void
	*/
    protected $url = 'http://www.glamstudios.in/wordpress/wp-json/wp/v2/';

    public function __construct() {
        parent::__construct();
        View::share('current_page', 'blog');
    }


	public function index(){
        $page = 1;
        $posts = collect($this->getJson($this->url . 'posts/?_embed&filter[orderby]=modified&per_page=50&categories=150'));
        //foreach($posts as $p) {
            //print_r($p->_embedded->{'wp:featuredmedia'}[0]->media_details->sizes->port3->source_url);
            //$featured_image = collect($this->getJson($this->url . 'media/'.$p->featured_media));
            //print_r($featured_image->id);
        //}
        return View::make('blog.posts', array('posts'=>$posts));
    }

    protected function getJson($url) {
        $response = @file_get_contents($url, false);
         if ($response === FALSE)
             abort(404);
        return json_decode( $response );
    }

    public function getPost($id) {
        $post = collect($this->getJson($this->url . 'posts/'.$id));
        $published_date = date('F d, Y',   strtotime($post['date']));
        $featured_media_id = $post['featured_media'];

        $featured_media = false;

        if ($featured_media_id>0){
            $featured_media = collect($this->getJson($this->url . 'media/'.$featured_media_id));
            if (!property_exists($featured_media['media_details']->sizes,"blog"))
                $featured_media=false;
        }

        $popular_posts = collect($this->getJson($this->url . 'posts/?_embed&categories=112&filter[orderby]=modified'));
        return View::make('blog.post', array('post'=>$post, 'featured_media'=>$featured_media, 'published_date' => $published_date, 'popular_posts' => $popular_posts));
    }
}
