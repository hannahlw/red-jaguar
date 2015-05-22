class BoardLink < ActiveRecord::Base
  belong_to :board
  belong_to :link
end
