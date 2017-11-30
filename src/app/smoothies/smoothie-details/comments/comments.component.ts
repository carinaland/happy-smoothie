import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  //todo change to interface
  commentList: any[];
  //@Input() idSmoothie;
  idSmoothie = 1;
  comment = 'jjj';

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getCommentsOfSmoothie(this.idSmoothie).subscribe(comments => {
      this.commentList = comments;
      console.log(this.commentList);
    });
  }

}
