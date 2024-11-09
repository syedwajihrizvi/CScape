export const getDate = (dateString: string) => {
    const date = new Date(dateString)
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based, so add 1
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    
    // Format the date as mm/dd/yyyy
    return `${month}/${day}/${year}`;
}

export const slugify = (string_to_convert: string) => 
    string_to_convert.toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/[\s_-]+/g, '-')
                    .replace(/^-+|-+$/g, '');