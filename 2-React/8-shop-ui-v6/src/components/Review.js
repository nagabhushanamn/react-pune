// import React, { Component } from 'react';
import React from 'react';

// class Review extends Component {
//     renderStars(review) {
//         let stars = [];
//         for (let i = 0; i < review.stars; i++)
//             stars.push(<i className="fa fa-star" style={{ color: 'red' }} key={i}></i>)
//         return stars;
//     }
//     render() {
//         let { value: review } = this.props
//         return (
//             <div className="row">
//                 <div className="col-8 col-sm-8 col-md-8">
//                     <div className="alert alert-info">
//                         {this.renderStars(review)} &mdash; {review.author}
//                         <hr />
//                         <p>{review.body}</p>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Review;


//-----------------------------------------------------------------

// function renderStars(review) {
//     let stars = [];
//     for (let i = 0; i < review.stars; i++)
//         stars.push(<i className="fa fa-star" style={{ color: 'red' }} key={i}></i>)
//     return stars;
// }

// export default function (props) {
//     let { value: review } = props
//     return (
//         <div className="row">
//             <div className="col-8 col-sm-8 col-md-8">
//                 <div className="alert alert-info">
//                     {renderStars(review)} &mdash; {review.author}
//                     <hr />
//                     <p>{review.body}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

//-----------------------------------------------------------------


function renderStars(review) {
    let stars = [];
    for (let i = 0; i < review.stars; i++)
        stars.push(<i className="fa fa-star" style={{ color: 'red' }} key={i}></i>)
    return stars;
}

export default ({ value: review }) => {
    return (
        <div className="row">
            <div className="col-8 col-sm-12 col-md-8">
                <div className="alert alert-info">
                    {renderStars(review)} &mdash; {review.author}
                    <hr />
                    <p>{review.body}</p>
                </div>
            </div>
        </div>
    );
}
