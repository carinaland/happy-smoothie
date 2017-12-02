import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from './../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  //todo add interface
  @Input() idComment;
  @Input() idUser;
  @Input() date;
  @Input() content;
  @Input() rating;

  comment: any;
  constructor(private commentService: CommentService) {  }

  ngOnInit() {
    this.commentService.getComment(this.idComment).subscribe(comments => {
      this.comment = comments[0];
    });
  }

}
