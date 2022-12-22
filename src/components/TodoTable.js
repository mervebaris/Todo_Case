import { Badge, Button, Card, CardHeader, CardTitle, Table } from 'reactstrap'
import TodoUpdate from './TodoUpdate'

const TodoTable = ({ data, getTodoList }) => {

    return (
        <Card className='p-4'>
            <CardHeader>
                <CardTitle tag='h4'>Todo'lar</CardTitle>
            </CardHeader>
            <Table hover>
                <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>IMG</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Transactions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, index) => (
                        <tr className='text-center align-middle' key={index}>
                            <td>{index + 1}</td>
                            <td><img className='rounded-pill border border-2 border-primary' style={{ objectFit: 'cover' }} src={item.img_url ? item.img_url : 'https://via.placeholder.com/150'} alt={item.title} width='50px' height="50px" /></td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>
                                {item.status === 0 && <Badge color='primary'>Devam Ediyor</Badge>}
                                {item.status === 1 && <Badge color='success'>Tamamlandı</Badge>}
                                {item.status === 2 && <Badge color='danger'>Silindi</Badge>}
                            </td>
                            <td>
                                {item.status === 0 ? (
                                    <div className='d-flex justify-content-center gap-2'>
                                        {item.status === 0 && (
                                            <TodoUpdate data={data} todoItem={item} todoIndex={index} getTodoList={getTodoList} />
                                        )}

                                        {item.status === 0 && <Button color='success' size='sm' onClick={() => {
                                            const newData = data.map((item, i) => {
                                                if (i === index) {
                                                    item.status = 1
                                                }
                                                return item
                                            })
                                            sessionStorage.setItem('todoList', JSON.stringify(newData))
                                            getTodoList()
                                        }}>Tamamlandı</Button>}

                                        {item.status === 0 && <Button color='danger' size='sm' onClick={() => {
                                            const newData = data.map((item, i) => {
                                                if (i === index) {
                                                    item.status = 2
                                                }
                                                return item
                                            })
                                            sessionStorage.setItem('todoList', JSON.stringify(newData))
                                            getTodoList()
                                        }}>Sil</Button>}
                                    </div>
                                ) : (
                                    <Badge color='secondary'>İşlem Sağlanamaz</Badge>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    )

}

export default TodoTable