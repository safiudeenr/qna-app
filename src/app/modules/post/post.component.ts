import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postId: number;

  feeds = {
    total: 200,
    community: '123',
    question: 'ques1',
    comments: [{output: 'comment1', likes: 10}, {output: 'comment2', likes: 10}]
  }
;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
  }

  getPost(id) {
    // Call the get post with id service
  }

}
