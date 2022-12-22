import { Nav, NavItem, NavLink } from 'reactstrap';
import TodoAdd from './TodoAdd';

const TodoNav = ({ data, getTodoList }) => {

    return (
        <Nav className='justify-content-between' pills>
            <div>
                <NavItem style={{ cursor: "pointer" }} onClick={() => {
                    getTodoList();
                }}>
                    <NavLink className='bg-info text-white fw-bold'>
                        Tüm Todo'lar
                    </NavLink>
                </NavItem>
            </div>
            <div className='d-flex gap-2'>
                <TodoAdd data={data} getTodoList={getTodoList} />

                <NavItem style={{ cursor: "pointer" }} onClick={() => {
                    getTodoList(0);
                }}>
                    <NavLink className='bg-primary text-white fw-bold'>
                        Devam Eden Todo'lar
                    </NavLink>
                </NavItem>

                <NavItem style={{ cursor: "pointer" }} onClick={() => {
                    getTodoList(1);
                }}>
                    <NavLink className='bg-success text-white fw-bold'>
                        Tamamlanmış Todo'lar
                    </NavLink>
                </NavItem>

                <NavItem style={{ cursor: "pointer" }} onClick={() => {
                    getTodoList(2);
                }}>
                    <NavLink className='bg-danger text-white fw-bold'>
                        Silinen Todo'lar
                    </NavLink>
                </NavItem>
            </div>
        </Nav>
    )

}

export default TodoNav