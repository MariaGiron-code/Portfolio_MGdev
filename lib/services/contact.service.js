import Contact from '@/lib/models/contact.model';

export async function saveContactMessage(data) {
    return await Contact.create(data)   
}