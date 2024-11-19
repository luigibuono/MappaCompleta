import { Component } from '@angular/core';

@Component({
  selector: 'app-sistemacommentielike',
  templateUrl: './sistemacommentielike.component.html',
  styleUrls: ['./sistemacommentielike.component.css']
})
export class SistemacommentielikeComponent {
 // Lista dei commenti simulata
 comments = [
  { id: 1, text: 'Questo è un ottimo prodotto!', likes: 3 },
  { id: 2, text: 'Mi piace molto, lo consiglio!', likes: 5 },
  { id: 3, text: 'Un po’ caro ma di buona qualità.', likes: 1 }
];

// Variabile per il nuovo commento
newCommentText: string = '';

// Aggiungi un nuovo commento
addComment() {
  if (this.newCommentText.trim() !== '') {
    const newComment = {
      id: this.comments.length + 1,  // Impostiamo un ID unico
      text: this.newCommentText.trim(),
      likes: 0 // Il nuovo commento parte con 0 like
    };
    this.comments.push(newComment);
    this.newCommentText = '';  // Resetta la textarea
  }
}

// Aggiungi un like a un commento
addLike(commentId: number) {
  const comment = this.comments.find(c => c.id === commentId);
  if (comment) {
    comment.likes++;
  }
}

// Rimuovi un commento
deleteComment(commentId: number) {
  this.comments = this.comments.filter(comment => comment.id !== commentId);
}
}