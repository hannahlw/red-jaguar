class Link < ActiveRecord::Base
  before_save :set_default_description
  before_save :set_default_name
  has_many :board_links
  has_many :boards, through: :board_links
  validates :url, presence: true

  private 
  def set_default_description
   if self.description == ""
    self.description = 'Who needs a description?'
   end
  end

  def set_default_name
    if self.name == ""
      self.name = "I'm a Card!"
    end
  end

end


