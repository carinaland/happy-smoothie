import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from './../comment.service';
import {Icomment} from "../../../../Interfaces/Icomment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() idComment : number;
  @Input() idUser : number;
  @Input() date : string;
  @Input() content : string;
  @Input() rating : number;

  comment: Icomment;
  constructor(private commentService: CommentService) {  }

  ngOnInit() : void {
    this.commentService.getComment(this.idComment).subscribe(comments => {
      this.comment = comments[0];
    });
  }

}
