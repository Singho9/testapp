import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiChatWindowComponent } from './ai-chat-window.component';

describe('AiChatWindowComponent', () => {
  let component: AiChatWindowComponent;
  let fixture: ComponentFixture<AiChatWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiChatWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiChatWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
