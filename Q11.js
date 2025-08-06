class Obj{
    constructor(order_id,customer,address,items,payment,delivery,discountCodes,orderTotal,createAt,updateAT){
        this.order_id = order_id;
         this.customer = customer;
          this.address = address;
           this.items = items;
            this.payment =payment;
             this.delivery = delivery;
             this.discountCodes = discountCodes;
             this.orderTotal = orderTotal;
             this.createAt = createAt;
             this.updateAT =updateAT;
    }
    
}
const obj = new Obj("ORD-2025-00456",{id:"CUST-1001",name:"joe Doe",email:"joe.doe@gmail.com"},{street:"45 Indepemdence Drive",city:"Lilongwe",country:"Malawi",postalCode:265},{productId:"P-001",name:"wirelessMouse",Qunatity:2,price:7500},{method:"MObile Money",phone:+265999123456,transactionId:"TXN-900123",success:true},{method:"courier",status:"In Transit",estimatedDelivery:"2025-08-10"},("NEWUSER","FREESHIP"),40500,"2025-08-04T14:25:00Z","2025-08-05T09:00:00Z");

JSON_objetc = JSON.stringify(obj);
console.log(JSON_objetc);

items = {productId:"P-002",name:"keyboard",Qunatity:10,price:15000};
obj.payment.transactionIdAA = "TXN-800123";
obj.orderTotal = 50600;

console.log(obj.payment.transactionId);
console.log(obj.orderTotal);
console.log(items);

const obj_from_json = JSON.parse(JSON_objetc);