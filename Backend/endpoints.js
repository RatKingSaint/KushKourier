//@flow
module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'kushKourier',
    version: '1.0.0',
  },
    paths: {
      '/api/login': {
        post: {
          operationId: 'loginUser',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/user', 
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Login successful',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/register': {
        post: {
          operationId: 'registerUser', 
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/user', 
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Registration successful',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/logout': {
        post: {
          operationId: 'logoutUser', 
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/user', 
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'logut successful',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/cookieVal': {
        post: {
          operationId: 'cookieValidate',
          responses: {
            '200': {
              description: 'Validated'
            },
            '400': {
              description: 'Validation Failed'
            }
          }
        }
      }, 
      '/api/admin/val': {
        post: {
          operationId: 'adminValidate',
          responses: {
            '200': {
              description: 'Validated'
            },
            '400': {
              description: 'Validation Failed'
            }
          }
        }
      },
      '/api/products': {
        post: {
          operationId: 'createProduct',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/product', 
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Product created successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
        put: {
          operationId: 'updateProduct',
          parameters: [
            {
              name: 'productId',
              in: 'path',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/product', 
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Product updated successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
        delete: {
          operationId: 'deleteProduct',
          parameters: [
            {
              name: 'productId',
              in: 'path',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          responses: {
            '204': {
              description: 'Product deleted successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
         
        },
        get: {
          operationId: 'getProducts',
          parameters: [
            {
              name: 'page',
              in: 'query',
              schema: { type: 'integer' },
            },
          ],
          responses: {
            '200': {
              description: 'Products retrieved successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/products/{productId}': {
        get: {
          operationId: 'getProducts',
          parameters: [
            {
              name: 'productId',
              in: 'path',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          responses: {
            '200': {
              description: 'Product retrieved successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/product/{productName}': {
        get: {
          operationId:'getProduct',
          parameters: [
            {
              name: 'productName',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          ],
          responses: {
            '200': {
              description: 'Product retrieved successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/products/{category}/{page}': {
        get: {
          operationId: 'getProductsByCategory',
          parameters: [
            {
              name: 'category',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
            {
              name: 'page',
              in: 'path',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          responses: {
            '200': {
              description: 'Products retrieved successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/users': {
        get: {
          operationId: 'getUsers',
          responses: {
            '200': {
              description: 'Users retrieved successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
        post: {
          operationId: 'updateUserName',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/user', 
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'User updated successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/user/{userId}': {
        get: {
          operationId: 'getUserById',
          parameters: [
            {
              name: 'userId',
              in: 'path',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          responses: {
            '200': {
              description: 'User retrieved successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
        
        delete: {
          operationId: 'deleteUser',
          parameters: [
            {
              name: 'userId',
              in: 'path',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          responses: {
            '204': {
              description: 'User deleted successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/users/email': {
        post: {
          operationId: 'updateEmail',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/user', 
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'User Email updated successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/users/name': {
        post: {
          operationId: 'updateLegalName',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/user', 
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'User Email updated successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/product/create': {
        post: {
          operationId: 'createProduct',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/product', 
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Product Created Successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/cart/create': {
        post: {
          operationId: 'createCart',
          requestBody: {
            required: true,
            content: {
              'application/json': {
              },
            },
          },
          responses: {
            '200': {
              description: 'Cart Created Successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/cart/removeItem': {
        post: {
          operationId: 'removeItemFromCart',
          requestBody: {
            required: true,
            content: {
              'application/json': {
              },
            },
          },
          responses: {
            '200': {
              description: 'Item Removed Successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/cart/get': {
        get: {
          operationId: 'getCartContents',
          responses: {
            '200': {
              description: 'Cart retrieved Successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/cart/value': {
        get: {
          operationId: 'getCartTotalPrice',
          responses: {
            '200': {
              description: 'Cart Price Retrieved Successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/cart/add': {
        post: {
          operationId: 'addToCart',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                
              },
            },
          },
          responses: {
            '200': {
              description: 'Item Added Successfully',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/cart/val': {
        post: {
          operationId: 'cartCheck',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                
              },
            },
          },
          responses: {
            '200': {
              description: 'Cart validated',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/cart/createCheckout': {
        post: {
          operationId: 'createCheckout',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                
              },
            },
          },
          responses: {
            '200': {
              description: 'Checkout Created',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
      '/api/cart/webHooks': {
        post: {
          operationId: 'checkoutWebhook',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                
              },
            },
          },
          responses: {
            '200': {
              description: 'webhook interacted with',
            },
            '400': {
              description: 'Bad Request',
            },
          },
        },
      },
    },
    components: {
     schemas: {
      user: {
       type: 'object',
       properties: {
        username: {
         type: 'string'
         },
         password: {
          type: 'string'
        },
         email: {
          type: 'string'
       },
       cpassword: {
        type: 'string'
       },
       first_name: {
        type: 'string'
       },
       last_name: {
        type: 'string'
       }

      }
     },
     product: {
      type: 'object',
      properties: {
        product_name: {
        type: 'string'
        },
        price: {
          type: 'integer'
        },
        stock: {
          type: 'integer'
        },
        category: {
          type: 'string'
        },
        discount: {
          type: 'integer'
        },
        image: {
          type: 'string'
        }
      }
     }
   }
  }
 }




