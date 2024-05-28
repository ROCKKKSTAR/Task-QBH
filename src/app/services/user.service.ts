import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root'
})


export class UserService {
  private users: any[] = [];

  addUser(user: any): void {
    this.users.push(user);
  }

  getUsers(): any[] {
    return this.users;
  }

  deleteUser(user: any): void {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

  generatePDF(users: any[]): void {
    const doc = new jsPDF();
    let y = 10;
    users.forEach(user => {
      doc.text(`Name: ${user.name}`, 10, y);
      doc.text(`Email: ${user.email}`, 10, y + 10);
      doc.text(`Phone Number: ${user.phoneNumber}`, 10, y + 20);
      doc.text(`Address: ${user.address}`, 10, y + 30);
      y += 40;
    });
    doc.save('users.pdf');
  }
  

  downloadPDF(): void {
    // Logic to download PDF
  }

  viewPDF(): void {
    // Logic to view PDF
  }
}