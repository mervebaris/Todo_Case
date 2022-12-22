import { useState } from 'react';
import { NavItem, NavLink, Modal, ModalHeader, ModalBody, Button, Col, Form, Input, Label, Row } from "reactstrap"

const TodoAdd = ({ data, getTodoList }) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const addTodo = (e) => {
        e.preventDefault();

        const img_url = e.target.img_url.value;
        const title = e.target.title.value;
        const description = e.target.description.value;

        if (!img_url || !title || !description) {
            alert('Lütfen boş alan bırakmayınız!');
            return false;
        }

        const todoObject = {
            img_url,
            title,
            description,
            status: 0
        }

        if (data) {
            sessionStorage.setItem('todoList', JSON.stringify([...data, todoObject]));
        }else {
            sessionStorage.setItem('todoList', JSON.stringify([todoObject]));
        }

        getTodoList();

        e.target.img_url.value = "";
        e.target.title.value = "";
        e.target.description.value = "";

        setModal(false);

    }

    return (
        <div>
            <NavItem style={{ cursor: "pointer" }} onClick={toggle}>
                <NavLink className='bg-warning text-black fw-bold'>
                    Yeni Todo Ekle
                </NavLink>
            </NavItem>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Yeni Todo Ekle</ModalHeader>
                <ModalBody>
                    <Form onSubmit={addTodo}>
                        <Row>
                            <Col className='mb-3' md={12}>
                                <Label>IMG URL</Label>
                                <Input type='text' id="img_url" placeholder="IMG URL" />
                            </Col>

                            <Col className='mb-3' md={12}>
                                <Label>Title</Label>
                                <Input type='text' id="title" placeholder="Title" />
                            </Col>

                            <Col className='mb-3' md={12}>
                                <Label>Description</Label>
                                <Input type='text' id="description" placeholder="Description" />
                            </Col>

                            <Col md={12}>
                                <div className='d-flex justify-content-end gap-2'>
                                    <Button type='button' className='fw-bold' size='sm' color='danger' onClick={toggle}>KAPAT</Button>
                                    <Button type='submit' className='fw-bold' size='sm' color='success'>KAYDET</Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )

}

export default TodoAdd