import {PostService} from './post.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('PostService', () => {
  let postService: PostService;
  let httpTestingController: HttpTestingController;
  const mockPosts = [
    {
      userId: 2,
      id: 1,
      title: 'Title one',
      body: 'Text one'
    },
    {
      userId: 2,
      id: 2,
      title: 'Title two',
      body: 'Text two'
    },
    {
      userId: 2,
      id: 3,
      title: 'Title three',
      body: 'Text three'
    }
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService],
    });
    postService = TestBed.inject(PostService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  it('should connect with API and return array of posts', () => {
    postService.getPosts()
      .subscribe(posts => {
        expect(posts).toBeTruthy();
        expect(posts.length).toEqual(3);
        expect(posts[0].id).toEqual(1);
        expect(posts[0].title).toEqual('Title one');
        expect(posts[0].body).toEqual('Text one');
      });
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
