import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app";
import { By } from "@angular/platform-browser";
describe("App Component", () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });
  it("should render", async () => {
    const appDe = fixture.debugElement;
    const h2De = appDe.query(By.css("h2"));
    const h2Element: HTMLHeadingElement = h2De.nativeElement;

    expect(h2Element.textContent).toBe("Vite + Angular");
  });
});
