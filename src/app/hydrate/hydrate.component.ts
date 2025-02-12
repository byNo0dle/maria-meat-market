import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hydrate',
  standalone: true,
  imports: [],
  templateUrl: './hydrate.component.html',
  styleUrl: './hydrate.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HydrateComponent {

}
