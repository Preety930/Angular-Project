import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingService } from '../testing.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  //let testService: TestingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
      .compileComponents();
    providers: [TestingService]
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //it('Login Test', () => {
  //  testService = TestBed.inject(TestingService);
  //  const Result = testService.login("Admin", "Password");
  //  expect(Result).toBe(true)
  //})
});
