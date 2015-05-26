class Board < ActiveRecord::Base
  belongs_to :user
  has_many :board_tags
  has_many :board_links
  has_many :tags, through: :board_tags
  has_many :links, through: :board_links
  accepts_nested_attributes_for :links
  accepts_nested_attributes_for :tags

  def increment(by = 1)
    self.views ||= 0
    self.views += by
    self.save
  end


  
end
