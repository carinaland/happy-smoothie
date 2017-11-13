import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: 'add-comment.component.html',
  styleUrls: ['add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Input() idSmoothie;

  comment = 'ddd';

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  addComment(){
    var comment = {
      'idUser': 2,
      'idSmoothie': this.idSmoothie,
      'content': this.comment,
      'rating': 3};

    this.commentService.addComment(comment).subscribe(res => {
      var res = res;
      console.log(res);
    });
  }

}
