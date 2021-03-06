import { customElement, inject, bindable } from 'aurelia-framework';
import { BsResizeContainer } from './resize-container';

@inject(Element)
@customElement('bs-scroll')
export class BsScroll extends BsResizeContainer {
  @bindable
  offset = 20;

  @bindable
  limitToContentHeight = false;

  @bindable
  class = '';

  @bindable
  height: number | null = null;

  @bindable
  minHeight = 0;

  constructor(element: Element) {
    super(element);
  }

  protected getContainerHeight(child: HTMLElement) {
    return this.height ? parseInt(<any>this.height) : super.getContainerHeight(child);
  }
}
