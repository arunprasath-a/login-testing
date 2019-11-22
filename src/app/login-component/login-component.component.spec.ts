import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponentComponent } from './../login-component/login-component.component';

import {
  MatToolbarModule,
  MatGridListModule,
  MatInputModule
} from '@angular/material';
import { HeaderComponentComponent } from './../header-component/header-component.component';
import { FooterComponentComponent } from './../footer-component/footer-component.component';
import { LandingComponentComponent } from './../landing-component/landing-component.component';

describe('Login Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatGridListModule,
        MatInputModule
      ],
      declarations: [
        LoginComponentComponent,
        HeaderComponentComponent,
        FooterComponentComponent,
        LandingComponentComponent
      ]
    }).compileComponents();
  }));

  it('should create the login component', () => {
    const fixture = TestBed.createComponent(LoginComponentComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
