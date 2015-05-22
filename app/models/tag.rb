class Tag < ActiveRecord::Base
  has_many :board_tags
  has_many :boards, through: :board_tags
end
