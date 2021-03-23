import { Component} from '@angular/core';

@Component({
  selector: 'app-dotnet',
  templateUrl: './dotnet.component.html',
  styleUrls: ['./dotnet.component.css']
})
export class DotnetComponent  {
  courses: any[] = [
    { courseId: 401, courseName: 'Design Patterns in C# and .NET', courseFees: 40, courseDescrip: 'Discover the modern implementation of design patterns with C# and .NET.', trainerImage: '../assets/face3.jpg' },
    { courseId: 402, courseName: 'Dependency Injection in C# and .NET', courseFees: 70, courseDescrip: 'An in-depth course on Dependency Injection and Inversion of Control.', trainerImage: '../assets/face1.jpg' },
    { courseId: 403, courseName: 'E-commerce app with .Net Core and Angular', courseFees: 45, courseDescrip: ' Build a proof of concept e-commerce store using Angular, .Net Core.', trainerImage: '../assets/face2.jpg' },
    { courseId: 404, courseName: 'Parallel Programming with C# and .NET', courseFees: 87, courseDescrip: 'Discover the core multithreading and parallelization concepts.', trainerImage: '../assets/face4.jpg' },
    { courseId: 405, courseName: '.NET Core Microservices', courseFees: 20, courseDescrip: 'Build distributed system using microservices architecture.', trainerImage: '../assets/face5.jpg' }

  ]
  
}
