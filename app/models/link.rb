class Link < ActiveRecord::Base
  has_many :board_links
  has_many :boards, through: :board_links
end
