import React, { useState } from "react";
import getData from "../data/data";
import FoydalanuvchilarPageWrapper from "./FoydalanuvchilarPageWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Form } from "react-bootstrap";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

export default function FoydalanuvchilarPage() {
    const [users, setUsers] = useState(getData());
    const [showModal, setShowModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    // Modalni ochish va foydalanuvchini saqlash
    const handleEdit = (user) => {
        setCurrentUser(user);
        setShowModal(true);
    };

    // Rolni saqlash
    const handleSave = () => {
        setUsers(
            users.map((u) =>
                u.id === currentUser.id ? { ...u, rol: currentUser.rol } : u
            )
        );
        setShowModal(false);
    };

    // Foydalanuvchini o'chirish
    const handleDelete = (id) => {
        if (window.confirm("Rostdan ham o'chirmoqchimisiz?")) {
            setUsers(users.filter((u) => u.id !== id));
        }
    };

    return (
        <FoydalanuvchilarPageWrapper>
            <h2>Foydalanuvchilar</h2>
            <p>Rollarni biriktirishingiz mumkin</p>

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ism</th>
                        <th>Telefon raqami</th>
                        <th>Roli</th>
                        <th>Harakatlar</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <th>{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.telefon}</td>
                            <td>{user.rol}</td>
                            <td>
                                <span
                                    className="me-2"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleEdit(user)}
                                >
                                    <FontAwesomeIcon icon={faEdit} />
                                </span>
                                <span
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleDelete(user.id)}
                                >
                                    <FontAwesomeIcon icon={faTrash} color='#de3535' />
                                </span>
                            </td>
                        </tr>
                    ))}

                    <tr className="fw-bold">
                        <td colSpan={3}>Jami</td>
                        <td colSpan={3}>{users.length} ta account</td>
                    </tr>
                </tbody>
            </table>

            {/* Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Rolni o'zgartirish</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {currentUser && (
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Foydalanuvchi: {currentUser.name}</Form.Label>
                                <Form.Select
                                    value={currentUser.rol}
                                    onChange={(e) =>
                                        setCurrentUser({ ...currentUser, rol: e.target.value })
                                    }
                                >
                                    <option value="admin">Admin</option>
                                    <option value="yetkazuvchi">Yetkazuvchi</option>
                                    <option value="foydalanuvchi">Foydalanuvchi</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        style={{ backgroundColor: '#de3535', color: 'white', border: 'none' }}
                        onClick={() => setShowModal(false)}
                    >
                        Bekor qilish
                    </Button>

                    <Button
                        style={{ backgroundColor: '#ffee00', color: 'black', border: 'none' }}
                        onClick={handleSave}
                    >
                        Saqlash
                    </Button>



                </Modal.Footer>
            </Modal>
        </FoydalanuvchilarPageWrapper>
    );
}
