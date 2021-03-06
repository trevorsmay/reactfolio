import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'http://cdn2.theweek.co.uk/sites/theweek/files/styles/16x8_748/public/130110food.jpg?itok=t7C-gDPT',
    altText: 'Waste Not',
    caption: 'Waste Not'
  },
  {
    src: 'https://www.mensjournal.com/wp-content/uploads/mf/_main_liftlift.jpg',
    altText: 'GitPumped',
    caption: 'GitPumped'
  },
  {
    src: 'https://www.thesprucepets.com/thmb/zGatfI2qi21xFeHz70GhX8Tm7z4=/4185x3139/smart/filters:no_upscale()/mongrel-with-lead-in-mouth-200164811-001-585d91683df78ce2c32342ff.jpg',
    altText: 'Dog Time',
    caption: 'Coming Soon: Dog Time'
  },
  {
    src: "https://lh5.googleusercontent.com/p/AF1QipNxz5kfJZRL7_unH4AOgGiB3Wzy3_m5MeOff0F9=w1200-h642-p-k-no",
    altText: "S-Wings Auto",
    caption: "Coming Soon: S-Wings Auto"
  }
];

class CarouselDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption  captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CarouselDisplay;