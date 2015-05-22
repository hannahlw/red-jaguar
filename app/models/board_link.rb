class BoardLink < ActiveRecord::Base
  belongs_to :board
  belongs_to :link
end
