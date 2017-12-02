import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsOverviewNavbarComponent } from './projects-overview-navbar.component';

describe('ProjectsOverviewNavbarComponent', () => {
  let component: ProjectsOverviewNavbarComponent;
  let fixture: ComponentFixture<ProjectsOverviewNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsOverviewNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsOverviewNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
