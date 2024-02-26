import bcrypt from 'bcryptjs';
import { connect } from "@/config/DB";
import { User } from "@/models/User";

export default async function handler(req, res) {
  connect();

  const adminExists = await User.findOne({ role: 'admin' });
  if (adminExists) {
    return res.status(400).json({ message: 'Admin user already exists' });
  }


  const adminData = {
    username: 'mmd',
    email: 'amir.vosoughi@gmail.com',
    phoneNumber: '000111',
    password: 'amir2006', 
    role: 'admin',
  };

  const hashedPassword = await bcrypt.hash(adminData.password, 10);

  const adminUser = new User({
    ...adminData,
    password: hashedPassword,
  });

  try {
    await adminUser.save();
    res.status(200).json({ message: 'Admin user created successfully' });
  } catch (error) {
    console.error('Error creating admin user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}