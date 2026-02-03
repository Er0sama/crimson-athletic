import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Trash2, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { items, removeFromCart, totalPrice } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle checkout logic here
        alert('Order placed successfully!');
        navigate('/');
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-secondary via-background to-secondary">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center py-16">
                        <h1 className="font-display text-4xl font-bold text-foreground mb-4">
                            Your Cart is Empty
                        </h1>
                        <p className="text-muted-foreground mb-8">
                            Add some items to your cart before checking out.
                        </p>
                        <Link to="/services">
                            <Button className="bg-primary hover:bg-accent">
                                Continue Shopping
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-secondary via-background to-secondary">
            <div className="container mx-auto px-4">
                <Link to="/" className="inline-flex items-center text-primary hover:text-accent mb-6 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                </Link>

                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                    Checkout
                </h1>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Order Summary */}
                    <div className="md:col-span-1">
                        <div className="bg-card rounded-lg shadow-card border border-border p-6 sticky top-24">
                            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                                Order Summary
                            </h2>
                            <div className="space-y-4 mb-6">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-3">
                                        <div className="relative w-20 h-20 bg-secondary rounded overflow-hidden flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-foreground text-sm truncate">
                                                {item.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">{item.brand}</p>
                                            <div className="flex items-center justify-between mt-1">
                                                <span className="text-sm font-semibold text-primary">
                                                    ${item.price}
                                                </span>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-destructive hover:text-destructive/80 transition-colors"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Separator className="my-4" />
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span className="text-foreground">${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Shipping</span>
                                    <span className="text-foreground">$10.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Tax</span>
                                    <span className="text-foreground">
                                        ${(totalPrice * 0.1).toFixed(2)}
                                    </span>
                                </div>
                                <Separator className="my-2" />
                                <div className="flex justify-between font-display font-bold text-lg">
                                    <span className="text-foreground">Total</span>
                                    <span className="text-primary">
                                        ${(totalPrice + 10 + totalPrice * 0.1).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Checkout Form */}
                    <div className="md:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Personal Information */}
                            <div className="bg-card rounded-lg shadow-card border border-border p-6">
                                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                                    Personal Information
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="firstName">First Name *</Label>
                                        <Input
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="lastName">Last Name *</Label>
                                        <Input
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="phone">Phone *</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div className="bg-card rounded-lg shadow-card border border-border p-6">
                                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                                    Shipping Address
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <Label htmlFor="address">Address *</Label>
                                        <Input
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="city">City *</Label>
                                            <Input
                                                id="city"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                required
                                                className="mt-1"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="zipCode">ZIP Code *</Label>
                                            <Input
                                                id="zipCode"
                                                name="zipCode"
                                                value={formData.zipCode}
                                                onChange={handleInputChange}
                                                required
                                                className="mt-1"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Information */}
                            <div className="bg-card rounded-lg shadow-card border border-border p-6">
                                <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center">
                                    <CreditCard className="h-5 w-5 mr-2 text-primary" />
                                    Payment Information
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <Label htmlFor="cardNumber">Card Number *</Label>
                                        <Input
                                            id="cardNumber"
                                            name="cardNumber"
                                            placeholder="1234 5678 9012 3456"
                                            value={formData.cardNumber}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="expiryDate">Expiry Date *</Label>
                                            <Input
                                                id="expiryDate"
                                                name="expiryDate"
                                                placeholder="MM/YY"
                                                value={formData.expiryDate}
                                                onChange={handleInputChange}
                                                required
                                                className="mt-1"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="cvv">CVV *</Label>
                                            <Input
                                                id="cvv"
                                                name="cvv"
                                                placeholder="123"
                                                value={formData.cvv}
                                                onChange={handleInputChange}
                                                required
                                                maxLength={4}
                                                className="mt-1"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full bg-primary hover:bg-accent text-white font-semibold text-lg py-6"
                            >
                                Place Order - ${(totalPrice + 10 + totalPrice * 0.1).toFixed(2)}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
