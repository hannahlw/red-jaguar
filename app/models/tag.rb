class Tag < ActiveRecord::Base
  before_save :set_case
  has_many :board_tags
  has_many :boards, through: :board_tags


private 
  def set_case
    self.name = self.name.downcase
  end

end
