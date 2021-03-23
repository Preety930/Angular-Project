import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews: any[] = [
    { reviewId: 201, reviewerName: 'Roshni',  reviewDescrip: 'Excellent Website', reviewerImage: '../assets/face1.jpg' },
    { reviewId: 202, reviewerName: 'Abhay', reviewDescrip: 'Helpful ', reviewerImage: '../assets/face2.jpg' },
    { reviewId: 203, reviewerName: 'Preety', reviewDescrip: 'Very Good', reviewerImage: '../assets/face3.jpg' },
    { reviewId: 204, reviewerName: 'Rahul', reviewDescrip: 'Helpful', reviewerImage: '../assets/face4.jpg' },
    { reviewId: 205, reviewerName: 'Neha', reviewDescrip: 'Good', reviewerImage: '../assets/face5.jpg' }
  ]
  searchText: string = '';
  SortbyParam: string = '';
}
