import { createContext, useState } from "react";

export const TestimonialContext = createContext();

function TestimonialProvider({ children }) {
  const apiData = [
    { id: "1", name: "Vishal Kate", rating: "4", comment: "This web portal is very nice" },
    { id: "2", name: "Pooja Sharma", rating: "3", comment: "I love this portal" },
    { id: "3", name: "Amit Verma", rating: "5", comment: "Excellent experience, very user friendly!" },
    { id: "4", name: "Neha Patil", rating: "4", comment: "Good design and smooth performance" },
    { id: "5", name: "Rahul Singh", rating: "2", comment: "Needs improvement in loading speed" },
    { id: "6", name: "Sneha Joshi", rating: "5", comment: "Amazing features and easy to use" },
    { id: "7", name: "Rohit Gupta", rating: "3", comment: "Average experience, can be better" },
    { id: "8", name: "Anjali Mehta", rating: "4", comment: "Nice UI and helpful content" },
    { id: "9", name: "Karan Malhotra", rating: "1", comment: "Facing issues while logging in" },
    { id: "10", name: "Priya Desai", rating: "5", comment: "Loved it! Highly recommended" }
  ];

  const [testimonials, setTestimonials] = useState(apiData);

  return (
    <TestimonialContext.Provider value={{ testimonials, setTestimonials }}>
      {children}
    </TestimonialContext.Provider>
  );
}

export default TestimonialProvider;