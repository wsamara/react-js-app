import React from "react";

class CourseItem extends React.Component{

    render(){

        return(
            <div>
                <li className="course">
                <button onClick={() => this.props.deleteCourseProps(this.props.course.id)}>DELETE</button>
                    {this.props.course.title}
                </li>

            </div>

            )



    }
}
export default CourseItem;
