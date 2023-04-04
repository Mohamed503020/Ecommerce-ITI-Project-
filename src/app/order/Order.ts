export interface Order {
    id: number,
   user_id: number,
    name: string,
   total_price: number,
    city: string,
    governate: string,
    street: string,
    pinCode: number,
    mobile: string,
    payment_status: number,
    created_at: Date
}
