import qualified Data.Text      as Text 
import qualified Data.Text.IO    as Text

main :: IO ()
main = do
    ls <- fmap Text.lines (Text.readFile "input1")
    putStrLn $ show $ sum $ map (\c -> fuelCounterUpper $ read $ (Text.unpack c) :: Int) ls

fuelCounterUpper :: Int -> Int
fuelCounterUpper n 
  | fuelCount < 0 || n < 1 = 0
  | otherwise = fuelCount + (fuelCounterUpper fuelCount)
  where fuelCount = sub2 $ div n 3 

sub2 :: Int -> Int
sub2 n = n - 2