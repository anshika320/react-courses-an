import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
const Card = (props) =>{
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;
    function clickHandler(){
        if(likedCourses.includes(course.id))
        {
            //pehle se liked h
            setLikedCourses((prev) =>
                prev.filter((cid) => (cid!==course.id)));
                toast.warning('Like removed');
        }
        else
        {
            //pehle se liked nhi h , insert into liked courses
            if(!likedCourses.length===0)
            {
                setLikedCourses([course.id]);
            }
            else
            {
                setLikedCourses((prev) => [...prev,course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    console.log(course);
    return (
        <div className=" bg-opacity-70 w-[300px] bg-bgDark rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url}></img>
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-1 grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />) 
                        }
                    </button>
                </div>
            </div>
            <div>
                <div className="p-3">
                    <p className="text-white font-bold text-lg leading-6">{course.title}</p>
                    <p className="mt-2 text-white">
                        {
                            course.description.length > 100 ? (course.description.substr(0,100) + "...") : (course.description)
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Card;