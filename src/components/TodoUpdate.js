import { useState } from 'react';
import { NavItem, NavLink, Modal, ModalHeader, ModalBody, Button, Col, Form, Input, Label, Row } from "reactstrap"

const TodoUpdate = ({ data, todoItem, todoIndex, getTodoList }) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const updateTodo = (e) => {
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

        Object.keys(data).map((_, key) => {
            if (key === todoIndex) {
                data[key] = todoObject;
                sessionStorage.setItem('todoList', JSON.stringify(data));
            }
        })

        getTodoList();

        setModal(false);//işlem bittikten sonra kapatıyor

    }

    return (
        <div>
            <Button color='warning' size='sm' onClick={toggle}>
                Düzenle
            </Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Todo Düzenle</ModalHeader>
                <ModalBody>
                    <Form onSubmit={updateTodo}>
                        <Row>
                            <Col className='mb-3' md={12}>
                                <Label>IMG URL</Label>
                                <Input type='text' id="img_url" defaultValue={todoItem.img_url} placeholder="IMG URL" />
                            </Col>

                            <Col className='mb-3' md={12}>
                                <Label>Title</Label>
                                <Input type='text' id="title" defaultValue={todoItem.title} placeholder="Title" />
                            </Col>

                            <Col className='mb-3' md={12}>
                                <Label>Description</Label>
                                <Input type='text' id="description" defaultValue={todoItem.description} placeholder="Description" />
                            </Col>

                            <Col md={12}>
                                <div className='d-flex justify-content-end gap-2'>
                                    <Button type='button' className='fw-bold' size='sm' color='danger' onClick={toggle}>KAPAT</Button>
                                    <Button type='submit' className='fw-bold' size='sm' color='success'>DÜZENLE</Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )

}

export default TodoUpdate