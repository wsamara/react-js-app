import React from "react";
import CoursesList from "./CoursesList";
import Header from "./Header";
import InputCourse from "./InputCourse";
import "../App.css";
import Theme from "./Theme";
import { v4 as uuidv4 } from "uuid";


class CourseContainer extends React.Component {


    state = {
        courses: [
            { id: uuidv4(),

                title: "CNIT 103 Hardware - 3 units",
            },
            {
                id: uuidv4(),

                title: "CNIT 131 Internet & Intro to HTML, CSS - 3 units",

            },
            {
                id: uuidv4(),
                title: "CNIT 106 Introduction to Networks - 3 units",

            },
            {
                id: uuidv4(),
                title: "CNIT 120 Network Security 3 units",

            }
        ],
        lightTheme: true,
    };

    changeTheme = () => {
        this.setState ( {
            lightTheme: !this.state.lightTheme

        });
    };

    deleteCourse = (id) => {
        this.setState({
            courses:
                [
                    ...this.state.courses.filter(course => {
                        return course.id !== id;

                    })
                ]
        });

    }
    addCourse = title => {
        const newCourse = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            courses: [...this.state.courses, newCourse]
        });
    };

    render() {
        return (
            <div className={`container ${this.state.lightTheme ? "light" : "dark"}`}>
                <Header />
                <Theme changeThemeProps={this.changeTheme} lightTheme={this.state.lightTheme}/>
                <InputCourse addCourseProps={this.addCourse}/>
                <CoursesList courses={this.state.courses}
                             deleteCourseProps={this.deleteCourse} />
                     </div>
        )
    }
}
export default CourseContainer;
