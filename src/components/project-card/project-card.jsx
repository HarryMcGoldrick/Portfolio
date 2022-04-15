import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./project-card.css";

export const ProjectCard = (props) => {
    const {img, title, description} = props;
    const [showBody, setShowBody] = useState(false);

    return (
        <Card className="expand-card" onMouseEnter={() => setShowBody(true)} onMouseLeave={() => setShowBody(false)}>
            <Card.Img variant="top" src={img} />
        </Card>
    );
}