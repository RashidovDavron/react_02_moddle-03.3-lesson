import React, { useState } from 'react';
import { Tab, Row, Col, Nav, Form, Button, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Qoshish() {
    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState('');

    const [dishes, setDishes] = useState([]);
    const [dishName, setDishName] = useState('');
    const [dishCategory, setDishCategory] = useState('');
    const [dishPrice, setDishPrice] = useState('');
    const [dishDescription, setDishDescription] = useState('');
    const [dishImageURL, setDishImageURL] = useState('');
    const [dishImageFile, setDishImageFile] = useState(null);

    const addCategory = () => {
        if (categoryName.trim() === '') return;
        setCategories([...categories, categoryName.trim()]);
        setCategoryName('');
    };

    const addDish = () => {
        if (!dishName || !dishCategory || !dishPrice || !dishDescription) return;

        const newDish = {
            name: dishName,
            category: dishCategory,
            price: dishPrice,
            description: dishDescription,
            image: dishImageFile ? URL.createObjectURL(dishImageFile) : dishImageURL || null,
        };

        setDishes([...dishes, newDish]);

        setDishName('');
        setDishCategory('');
        setDishPrice('');
        setDishDescription('');
        setDishImageFile(null);
        setDishImageURL('');
    };

    return (
        <div className="p-3">
            <h2>Qo'shish</h2>
            <p className='fs-6'>Yangi kategoriya/taom qo'shish</p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="categories">
                <Row>
                    <Col sm={12}>
                        <Nav variant="pills" className="flex-row mb-3">
                            <Nav.Item>
                                <Nav.Link eventKey="categories">Kategoriyalar</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="addDish">Taom qo'shish</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="dishesList">Taomlar ro'yxati</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </Col>

                    <Col sm={9}>
                        <Tab.Content>

                            {/* Kategoriya qo'shish */}
                            <Tab.Pane eventKey="categories">
                                <h2>Kategoriya qo'shish</h2>
                                <Form className="d-flex align-items-center gap-2">
                                    <Form.Control
                                        type="text"
                                        placeholder="Kategoriya nomi"
                                        value={categoryName}
                                        onChange={(e) => setCategoryName(e.target.value)}
                                    />
                                    <Button onClick={addCategory}>Qo'shish</Button>
                                </Form>

                                <h3 className="mt-3">Kategoriyalar ro'yxati</h3>
                                <ul className="list-group">
                                    {categories.map((cat, idx) => (
                                        <li key={idx} className="list-group-item">{cat}</li>
                                    ))}
                                </ul>
                            </Tab.Pane>

                            {/* Taom qo'shish */}
                            <Tab.Pane eventKey="addDish">
                                <h2>Taom qo'shish</h2>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Rasm URL kiriting"
                                            value={dishImageURL}
                                            onChange={(e) => setDishImageURL(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Yoki Rasm fayl</Form.Label>
                                        <Form.Control
                                            type="file"
                                            onChange={(e) => setDishImageFile(e.target.files[0])}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Taom nomi"
                                            value={dishName}
                                            onChange={(e) => setDishName(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="Taom tarifi"
                                            value={dishDescription}
                                            onChange={(e) => setDishDescription(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="number"
                                            placeholder="Narxi"
                                            value={dishPrice}
                                            onChange={(e) => setDishPrice(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Select
                                            value={dishCategory}
                                            onChange={(e) => setDishCategory(e.target.value)}
                                        >
                                            <option value="">Kategoriya tanlang</option>
                                            {categories.map((cat, idx) => (
                                                <option key={idx} value={cat}>{cat}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>

                                    <Button onClick={addDish}>Qo'shish</Button>
                                </Form>
                            </Tab.Pane>

                            <Tab.Pane eventKey="dishesList">
                                <h2>Taomlar ro'yxati</h2>
                                <Row className="g-3">
                                    {dishes.map((dish, idx) => (
                                        <Col sm={6} md={4} key={idx}>
                                            <Card>
                                                {dish.image && <Card.Img variant="top" src={dish.image} />}
                                                <Card.Body>
                                                    <Card.Title>{dish.name}</Card.Title>
                                                    <Card.Text>{dish.description}</Card.Text>
                                                    <Card.Text><strong>Narxi:</strong> {dish.price} so'm</Card.Text>
                                                    <Card.Text><em>Kategoriya: {dish.category}</em></Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>

                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}
