import { useEffect, useState } from 'react';
import '../../style/sb-admin-2.min.css';
import uuid from 'react-uuid';
import axios from 'axios';
import { MdDelete } from 'react-icons/md';

const UserProducts = () => {
  const initialProduct = {
    name: '',
    price: '',
    image_uri: '',
    description: '',
    available: '',
  };
  const [userProduct, setUserProduct] = useState(initialProduct);
  const [userProducts, setUserProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  const getUserProducts = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        'http://172.16.10.132:3574/nc/early_adapters_esxl/api/v1/products',
        {
          headers: {
            'xc-auth':
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inl1c2lmLmV5bnVsbGFiZXlsaUBmZXJydW1jYXBpdGFsLmF6IiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOjEsInJvbGVzIjoidXNlciIsImlhdCI6MTY1MjQzNzE1Nn0.pxaIoWn4TxMAZk5vF6DPCaSal9WjmKsQJeJqtugN6FI',
          },
        }
      );
      setUserProducts(res.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserProducts();
  }, [isChanged]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://172.16.10.132:3574/nc/early_adapters_esxl/api/v1/products',
        {
          name: userProduct.name,
          price: userProduct.price,
          image_uri: userProduct.image_uri,
          description: userProduct.description,
          available: userProduct.available,
        },
        {
          headers: {
            'xc-auth':
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inl1c2lmLmV5bnVsbGFiZXlsaUBmZXJydW1jYXBpdGFsLmF6IiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOjEsInJvbGVzIjoidXNlciIsImlhdCI6MTY1MjQzNzE1Nn0.pxaIoWn4TxMAZk5vF6DPCaSal9WjmKsQJeJqtugN6FI',
          },
        }
      );
      setIsChanged(uuid());
      setUserProduct(initialProduct);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setUserProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(
        `http://172.16.10.132:3574/nc/early_adapters_esxl/api/v1/products/${id}`,
        {
          headers: {
            'xc-auth':
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inl1c2lmLmV5bnVsbGFiZXlsaUBmZXJydW1jYXBpdGFsLmF6IiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOjEsInJvbGVzIjoidXNlciIsImlhdCI6MTY1MjQzNzE1Nn0.pxaIoWn4TxMAZk5vF6DPCaSal9WjmKsQJeJqtugN6FI',
          },
        }
      );
      setIsChanged(uuid());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className='user-products'>
      <h2 className='user-products_title'>User products</h2>
      <form className='add-product-form' onSubmit={(e) => handleSubmit(e)}>
        <h3>Product Details</h3>
        <input
          required
          name='name'
          value={userProduct.name}
          onChange={(e) => {
            handleChange(e);
          }}
          className='form--input'
          type='text'
          placeholder='Name'
        ></input>
        <input
          required
          name='price'
          value={userProduct.price}
          onChange={(e) => {
            handleChange(e);
          }}
          className='form--input '
          type='text'
          placeholder='Price'
        ></input>
        <input
          required
          name='image_uri'
          value={userProduct.image_uri}
          onChange={(e) => {
            handleChange(e);
          }}
          className='form--input '
          type='text'
          placeholder='Image url'
        ></input>
        <input
          required
          name='description'
          value={userProduct.description}
          onChange={(e) => {
            handleChange(e);
          }}
          className='form--input '
          type='text'
          placeholder='Description'
        ></input>
        <input
          required
          name='available'
          value={userProduct.available}
          onChange={(e) => {
            handleChange(e);
          }}
          className='form--input '
          type='text'
          placeholder='Available'
        ></input>
        <button className='form--button' type='submit'>
          Add Product
        </button>
      </form>
      {isLoading && <h1>Loading...</h1>}
      <div className='container-fluid'>
        <div className='card shadow mb-4'>
          <div className='card-header py-3'></div>
          <div className='card-body'>
            <div className='table-responsive'>
              <table
                className='table table-bordered'
                id='dataTable'
                width='100%'
                cellSpacing='0'
              >
                <thead>
                  <tr role='row'>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image url</th>
                    <th>Description</th>
                    <th>Available</th>
                  </tr>
                </thead>
                <tbody>
                  {userProducts &&
                    userProducts.map((product) => {
                      return (
                        <tr key={product.id}>
                          <td>{product.name}</td>
                          <td>{product.price}$</td>
                          <td>{product.image_uri}</td>
                          <td>{product.description}</td>
                          <td>
                            {product.available === 1
                              ? 'In Stock'
                              : 'Out of Stock'}
                          </td>
                          <td>
                            <MdDelete
                              className='table-delete-icon'
                              onClick={() => {
                                handleDeleteProduct(product.id);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProducts;
