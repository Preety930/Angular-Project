import { Component} from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent{

  courses: any[] = [
    { courseId: 201, courseName: 'Object Oriented Programming in Java', courseFees: 40, courseDescrip: 'It is a general-purpose programming language that is class-based.',trainerImage: '../assets/face3.jpg' },
    { courseId: 202, courseName: 'Core Java', courseFees: 70, courseDescrip: 'It covers the basic concept of Java programming language.', trainerImage: '../assets/face1.jpg' },
    { courseId: 203, courseName: 'Advanced Java', courseFees: 45, courseDescrip: ' It is specially designed to develop web-based, network-centric or enterprise applications.', trainerImage: '../assets/face2.jpg' },
    { courseId: 204, courseName: 'Building Modern Java Applications on AWS', courseFees: 87, courseDescrip: 'The goal is to build out serverless architectures', trainerImage: '../assets/face4.jpg' },
    { courseId: 205, courseName: 'Web Development with Java Spring Framework', courseFees: 20, courseDescrip: 'Spring is the most Popular web java framework', trainerImage: '../assets/face5.jpg' }

  ]

}
