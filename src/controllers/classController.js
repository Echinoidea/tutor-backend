// Get my supabase service export
const supabase = require("../services/supabaseService");

const getAllClasses = async (req, res) => {
  const { data, error } = await supabase
  .from('class')
  .select();

  if (error) {
    console.error('Error fetching data:', error);
    return res.status(500).json({error: error.message});
  }

  return res.json(data);
}

module.exports = {
  getAllClasses
};