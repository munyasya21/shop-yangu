

const MensClothing = () => {
   // Add product to the database

   const addProduct = async () => {
    try {
      const response = await fetch('http://localhost:3000/kakaluxe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      console.log('Product added:', data);
      alert('Product added successfully!');
      window.location.reload();
      setNewProduct({ name: '', price: '', stockLevel: '', description: '', });

    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product!');
    }
  };

  // Delete product by ID

  const deleteShop = async (shopId,shopStock) => {
    if (shopStock > 0) {
      alert('Product has stock. Cannot delete product.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/products/${shopId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log(`Product with ID ${shopId} deleted successfully.`);
        alert(`Product with ID ${shopId} deleted successfully.`);
        window.location.reload();
      } else {
        console.error(`Failed to delete shop with ID ${shopId}.`);
        alert(`Failed to delete shop with ID ${shopId}.`);
      }
    } catch (error) {
      console.error('Error deleting shop:', error);
      alert('An error occurred while deleting the product.');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    addShop();
  };
    return (
        <div>
           <h2>Our Closet</h2> 
        </div>
    )
}
export default MensClothing;