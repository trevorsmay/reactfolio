// import React, { Component } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from 'reactstrap';

// const items = [
//   {
//     src: 'http://cdn2.theweek.co.uk/sites/theweek/files/styles/16x8_748/public/130110food.jpg?itok=t7C-gDPT',
//     altText: 'Slide 1',
//     caption: 'Food Solutions'
//   },
//   {
//     src: 'https://www.mensjournal.com/wp-content/uploads/mf/_main_liftlift.jpg',
//     altText: 'Slide 2',
//     caption: 'GitPumped'
//   },
//   {
//     src: 'https://www.thesprucepets.com/thmb/zGatfI2qi21xFeHz70GhX8Tm7z4=/4185x3139/smart/filters:no_upscale()/mongrel-with-lead-in-mouth-200164811-001-585d91683df78ce2c32342ff.jpg',
//     altText: 'Slide 3',
//     caption: 'Dog Time!'
//   }
// ];

// class CarouselDisplay extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { activeIndex: 0 };
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//     this.goToIndex = this.goToIndex.bind(this);
//     this.onExiting = this.onExiting.bind(this);
//     this.onExited = this.onExited.bind(this);
//   }

//   onExiting() {
//     this.animating = true;
//   }

//   onExited() {
//     this.animating = false;
//   }

//   next() {
//     if (this.animating) return;
//     const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
//     this.setState({ activeIndex: nextIndex });
//   }

//   previous() {
//     if (this.animating) return;
//     const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
//     this.setState({ activeIndex: nextIndex });
//   }

//   goToIndex(newIndex) {
//     if (this.animating) return;
//     this.setState({ activeIndex: newIndex });
//   }

//   render() {
//     const { activeIndex } = this.state;

//     const slides = items.map((item) => {
//       return (
//         <CarouselItem
//           onExiting={this.onExiting}
//           onExited={this.onExited}
//           key={item.src}
//         >
//           <img src={item.src} alt={item.altText} />
//           <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
//         </CarouselItem>
//       );
//     });

//     return (
//       <>
//       {/* <style>
//       {
//         `.item {
//             max-width: 100%;
//             height: 500px;
         
//           }`
//       }
//     </style> */}
//       <Carousel
//         activeIndex={activeIndex}
//         next={this.next}
//         previous={this.previous}
//       >
//         <CarouselIndicators className="item" tag="div" items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
//         {slides}
//         <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
//         <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
//       </Carousel>
//       </>
//     );
//   }
// }
// className="custom-tag"
// tag="div"

// export default CarouselDisplay;

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
    caption: 'Coming Soon: Dog Time!'
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
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
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