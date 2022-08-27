import { NgModule } from '@angular/core';
import { TruncateratingPipe } from './truncaterating.pipe';
import { TimeDiffPipe } from './time-diff.pipe';

@NgModule({
declarations: [ TruncateratingPipe, TimeDiffPipe],
imports: [],
exports: [TruncateratingPipe,TimeDiffPipe],
})

export class PipesModule {}