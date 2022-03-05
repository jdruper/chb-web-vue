import http from '../http-common';
import { from, map, pluck } from 'rxjs';

class BlogDataService {
  getAllPosts() {
    return from(
      http.get(
        '/wp/v2/posts&_embed=author,wp:featuredmedia,wp:term&_fields=id,excerpt,title,date,link,author,_links'
      )
    ).pipe(
      pluck('data'),
      map((posts) => {
        posts.push(posts[0]);
        posts.push(posts[0]);
        // posts.push(posts[0]);
        // posts.push(posts[0]);
        // posts.push(posts[0]);
        return posts.map((post) => {
            return { 
                title: post.title.rendered,
                date: new Date(post.date).toLocaleDateString(),
                link: post.link,
                excerpt: post.excerpt.rendered,
                author: post._embedded.author[0].name,
                thumbnail_url: post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url,
                medium_url: post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url,
                category: post._embedded['wp:term'][0][0].name,
             };
        });
      })
    );
  }
  //   get(id) {
  //     return http.get(`/tutorials/${id}`);
  //   }
  //   create(data) {
  //     return http.post('/tutorials', data);
  //   }
  //   update(id, data) {
  //     return http.put(`/tutorials/${id}`, data);
  //   }
  //   delete(id) {
  //     return http.delete(`/tutorials/${id}`);
  //   }
  //   deleteAll() {
  //     return http.delete(`/tutorials`);
  //   }
  //   findByTitle(title) {
  //     return http.get(`/tutorials?title=${title}`);
  //   }
}
export default new BlogDataService();
